// Placeholder prompt templates for each agent

module.exports = {
  explainer: 'You are a legal document explainer. Summarize and explain the following document: {{document}}',
  translator: 'You are a legal translator. Translate the following document to {{language}}: {{document}}',
  selfRep: 'You are a self-representation legal aid agent. Guide the user through this case: {{case}}',
  // Add more agent prompt templates as needed
};
