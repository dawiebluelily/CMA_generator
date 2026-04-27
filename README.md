# Blue Lily CMA Online App - v5

This version includes the Sheet 1 calculation logic from the original Excel workbook.

## What is included

- 10-page Blue Lily CMA PDF preview and export.
- Property type dropdown matching the original sheet:
  - SECTIONAL
  - RESIDENTIAL
  - COMMERCIAL
  - AGRICULTURAL
  - INDUSTRIAL
  - VACANT LAND
- Market calculator for:
  - Sold comparable properties
  - Currently on the market properties
  - Price per m² per comparable
  - Lowest sold price
  - Average sold price
  - Median price
  - Highest sold price
  - Average price per m²
  - Recommended market value
  - 15% below, 10% below, market value, 10% above and 15% above
  - Absorption Based Price Index (API)
  - Buyer / shifting / seller market indicator
- On-market image upload page.
- Under-offer screenshot upload page.
- Seller FICA and compliance page.
- Export PDF button.
- Backup/import JSON option.

## Formula logic added

The app follows the same logic as Sheet 1:

- Sold price per m² = Sales Price / Built Area
- Highest sold price = MAX of sold comparable sales prices
- Lowest sold price = MIN of sold comparable sales prices
- Average sold price = AVERAGE of sold comparable sales prices
- Median = MEDIAN of sold comparable sales prices
- Average price per m² = AVERAGE of sold comparable price per m² values
- Active price per m² = Sales Price / Built Area
- Active highest advertised = MAX of active listing sales prices
- Active lowest advertised = MIN of active listing sales prices
- Active highest price per m² = MAX of active listing price per m² values
- Client estimated values = Client under-roof size x comparable price per m² highs/lows
- Recommended price = AVERAGE of sold prices, active advertised prices and client estimated values
- API = (Recent Sales / 12) / Competing Properties
- Market type:
  - API above 20% = Sellers Market
  - API below 15% = Buyers Market
  - API between 15% and 20% = Shifting Market

## Deployment

Upload the full folder to Netlify, GitHub Pages or any static hosting provider.
Open `index.html` locally to test.
