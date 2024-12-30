
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { polygonAmoy } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";

const accountFactoryAddress = import.meta.env.VITE_TEMPLATE_FACTORY_ADDRESS;
const gasSponsored = import.meta.env.VITE_TEMPLATE_SPONSORED_GAS;

const tokenName = import.meta.env.VITE_TEMPLATE_TOKEN_NAME;
const tokenAddress = import.meta.env.VITE_TEMPLATE_TOKEN_ADDRESS;
const tokenSymbol = import.meta.env.VITE_TEMPLATE_TOKEN_SYMBOL;

export function App() {

	return (
		<main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
			<div className="py-20">
				{/* <Header /> */}
				<div className="flex justify-center mb-20">
					<div>
						<ConnectButton
							client={client}
							chain={polygonAmoy}
							supportedTokens={{
								[polygonAmoy.id]: [
									{
										address: tokenAddress,
										name: tokenName,
										symbol: tokenSymbol,
										icon: "https://example.com/icon.png",
									},
								],
							}}
							wallets={[
								inAppWallet({
									auth: {
										options: [
											"email",
											"discord",
											"google",
											"facebook",
											"farcaster",
											"coinbase",
											"apple",
											"passkey",
										]
									}
								}),
							]}
							accountAbstraction={{
								chain: polygonAmoy,
								sponsorGas: gasSponsored,
								factoryAddress: accountFactoryAddress,
							}}
							appMetadata={{
								name: "Example app",
								url: "https://example.com",
							}}
						/>
					</div>
					<div>

					</div>
				</div>

			</div>
		</main>
	);
}

