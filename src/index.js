const app = require('./app');
const config = require('./utils/config');

const PORT = config.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on ${config.PORT}`);
});
