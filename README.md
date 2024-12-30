## Environment Variables
Tauri template with web3 SMART WALLETS and accountFactory contract integration.
The project is set up to run on polygon amoy testnet and requires a token contract and an acountFactory contract to work
To run this project, you will need to add the following environment variables to your .env file (remove .example extention):

`VITE_TEMPLATE_CLIENT_ID` * REQUIRED
`VITE_TEMPLATE_SECRET_KEY`
`VITE_TEMPLATE_FACTORY_ADDRESS`
`VITE_TEMPLATE_SPONSORED_GAS` * boolean

`VITE_TEMPLATE_TOKEN_ADDRESS`
`VITE_TEMPLATE_TOKEN_NAME`
`VITE_TEMPLATE_TOKEN_SYMBOL`

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client). 

```bash
npm install
npm run tauri dev
```