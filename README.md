# Blue Lily CMA PDF Builder

This is a static online app for creating the Blue Lily Comparative Market Analysis PDF from an online form.

## Files

- `index.html` - the app layout and 10-page PDF preview
- `styles.css` - Blue Lily styling and PDF page layout
- `app.js` - form logic, calculations, FICA/ownership/compliance output, image uploads and PDF export
- `assets/blue-lily-logo.jpg` - Blue Lily logo used in the PDF template

## What the app exports

The export follows the 10-page Blue Lily CMA template:

1. Comparative Market Analysis cover page
2. Property Information
3. Price to Sell
4. Why Sell at Market Value
5. The Competition - On the Market
6. The Competition - Under Offer
7. Why an Exclusive Mandate
8. Seller Info
9. Seller FICA and Compliance Certificates
10. Our Commitment To You

## How to use locally

Open `index.html` in a browser. For best PDF export results, use Chrome or Edge.

## How to deploy online

### Netlify drag-and-drop

1. Go to Netlify.
2. Create a new site.
3. Drag the full folder into the deploy area.
4. Open the published link.

### GitHub Pages

1. Upload these files to a GitHub repository.
2. Go to Settings > Pages.
3. Set the branch to `main` and folder to `/root`.
4. Publish.

## PDF export

The app uses `html2pdf.js` from a CDN for one-click PDF export. If the CDN is blocked, use the `Print / Save PDF` button and choose Save as PDF in the browser print dialog.

## Data and privacy

- Form data is saved only in the browser local storage.
- Uploaded images stay in the browser and are not sent to a server.
- Use `Download backup` to save a JSON backup of a CMA.
- Use `Import backup` to reload a previous CMA.
