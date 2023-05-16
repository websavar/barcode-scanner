## OVERVIEW 
  This is a simple web application which can be used to check what food is available at the location of a partner and
  allows the people in warehouses (called "Pickers") to report products in a structured way. They can also create new products. Packaged products have a barcode. External information databases host relevant product data like weight or ingredients data. Most packaged products have the best before date printed on their packaging. Sales teams need this information since a product's value decreases as it approaches its best before date. Most fruit and vegetable products don't have the best before date. Here it's rather a qualitative description of the quality state.

## The Scenario
Let's assume that one of our pickers is scanning a multitude of products with a mobile app and submits the session to the Backend service. 

## REQUIRED FEATURES 
This application interacts with a backend API to allow the picker to scan, modify, and submit product data:

1. Scan barcodes, returning a GTIN.
2. Send this GTIN to an endpoint (using the mock server) which returns product data.
3. Open this product data in a form allowing the user to change data (except the GTIN) before submitting it to an endpoint in the backend.
4. If the product requires a best before date, the form should include a field for it, and the selected date should be included in the request to the API endpoint on submission.

The backend API should have the following endpoints:

1. Products are identified using the field `code` in combination with the field `type`.
2. The `code` field should not contain any leading zeros once it is stored in our database.
3. The `code` may be a mix of both, ones with leading zeros and without them.
4. There may be unicode characters which need to be parsed before storing in our database.
5. The field `trade_item_unit_descriptor` may also be present as `trade_item_descriptor` but should be transformed to the first before being stored in the DB.


## Dependencies
- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework packed with classes like Bootstrap.
- [postcss](https://www.npmjs.com/package/postcss): PostCSS is a tool for transforming styles with JS plugins.
- [autoprefixer](https://github.com/postcss/autoprefixer): The Autoprefixer PostCSS plugin is one of the most popular CSS
  processors.
- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react):A set of completely unstyled, fully 
  accessible UI components for React, designed to integrate beautifully with Tailwind CSS.
- [axios](https://github.com/axios/axios): A Promise-based HTTP client for making API requests.
- [@ericblade/quagga2](https://github.com/ericblade/quagga2): A library to for barcode scanning.
- [react-hook-form](https://react-hook-form.com/): A library for managing form state in React.
- [json-server]: to create a ready-to-use mock server, and uses the provided `db.json` file.

## Setup and Run
1. Run `npm run dev` or `yarn dev` to install required dependencies <br />
  (Run `npm install --legacy-peer-deps` in case of facing error)
2. Run `npm run backend` or `yarn backend` to run the json database on http://localhost:3001
3. Run `npm start` to run the project and Open http://localhost:3000
