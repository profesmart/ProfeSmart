const MODES = new Set(['instrument', 'report', 'recovery', 'activity', 'assistant']);

function safeContext(context = {}) {
  const activity = context.activity || {};
  return {
    course: context.course ? { grade: context.course.grade, area: context.course.area } : null,
    period: context.period,
    activity: context.activity ? {
      name: activity.name,
      intention: activity.intention,
      fundamentalCompetencies: activity.fundamentalCompetencies,
      specificCompetencies: activity.specificCompetencies,
      achievementIndicators: activity.achievementIndicators,
      context: activity.context,
      values: activity.values
    } : null,
    studentSelected: Boolean(context.studentSelected),
    periodActivities: Array.isArray(context.periodActivities) ? context.periodActivities.slice(0, 40).map(a => ({
      name: a.name,
      indicators: a.indicators,
      values: a.values
    })) : []
  };
}

function responseText(data) {
  return (data.output || [])
    .flatMap(item => item.content || [])
    .filter(item => item.type === 'output_text')
    .map(item => item.text)
    .join('\n')
    .trim();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido.' });
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'ProfeSmart IA requiere configurar OPENAI_API_KEY en Vercel.' });

  const { mode, prompt, context } = req.body || {};
  if (!MODES.has(mode) || typeof prompt !== 'string' || prompt.length > 4000) {
    return res.status(400).json({ error: 'Solicitud inválida.' });
  }

  const task = {
    instrument: 'Propón criterios observables para el instrumento. Escribe un criterio por línea, sin numeración. No copies ni cambies los indicadores oficiales y no afirmes que tu propuesta forma parte del currículo.',
    report: 'Redacta un informe docente claro, profesional y sustentado únicamente en los datos suministrados. Señala como pendiente cualquier dato ausente.',
    recovery: 'Diseña un plan de recuperación personalizado con necesidad detectada, indicador priorizado, actividades, recursos, evaluación y seguimiento. Usa solo los datos suministrados.',
    activity: 'Diseña una actividad adicional con nombre, intención pedagógica en infinitivo, inicio, desarrollo, cierre, recursos, evidencias y evaluación. Alinea la propuesta sin inventar elementos curriculares oficiales.',
    assistant: 'Responde la consulta pedagógica de manera práctica y contextualizada.'
  }[mode];

  const instructions = `Eres ProfeSmart IA, asistente para docentes de Ciencias Naturales de Educación Secundaria de República Dominicana. Respeta estrictamente esta jerarquía: competencia fundamental, competencia específica de Ciencias Naturales, indicador de logro, intención pedagógica, actividad y evaluación. Los indicadores y competencias oficiales se conservan literalmente. Nunca inventes, atribuyas al currículo ni presentes como oficial un descriptor, competencia o indicador que no aparezca en CONTEXTO. Distingue siempre entre “texto curricular oficial” y “propuesta de IA”. No otorgues calificaciones automáticamente: el docente decide y aprueba. ${task}`;

  try {
    const openai = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5',
        instructions,
        input: `SOLICITUD DEL DOCENTE (no contiene datos personales):\n${prompt}\n\nCONTEXTO CURRICULAR DE PROFESMART:\n${JSON.stringify(safeContext(context), null, 2)}`,
        store: false
      })
    });
    const data = await openai.json();
    if (!openai.ok) return res.status(openai.status).json({ error: data.error?.message || 'El servicio de IA no respondió.' });
    const output = responseText(data);
    if (!output) return res.status(502).json({ error: 'La IA no produjo una respuesta utilizable.' });
    return res.status(200).json({ output });
  } catch (error) {
    return res.status(500).json({ error: 'No fue posible conectar con ProfeSmart IA.' });
  }
}
