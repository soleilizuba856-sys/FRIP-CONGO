const express = require('express');
require('dotenv').config();
const marketplaceRoutes = require('./routes/marketplace');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/marketplace', marketplaceRoutes);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});