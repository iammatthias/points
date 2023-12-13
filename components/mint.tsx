import * as React from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { useDebounce } from "../lib/useDebounce";

export default function MintTokensForm() {
  const [inputValue, setInputValue] = React.useState("100"); // Raw input value as a string
  const debouncedInputValue = useDebounce(inputValue, 500); // Debounced raw input value
  const [inputError, setInputError] = React.useState(""); // State to handle input error

  // Apply rounding when the debounced input value changes
  React.useEffect(() => {
    const numericValue = Number(debouncedInputValue);
    const roundedValue = numericValue < 100 ? 100 : Math.round(numericValue / 100) * 100;
    setInputValue(roundedValue.toString());
  }, [debouncedInputValue]);

  const numTokens = Number(inputValue); // Use the rounded value for the number of tokens

  const pricePerToken = 0.0001; // Define the price per token, update as needed
  const totalValue = pricePerToken * (numTokens / 100); // Total value in ether
  const totalValueInWei = BigInt(Math.round(totalValue * 10 ** 18)); // Convert totalValue to Wei and then to bigint

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update the raw input value
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F", // mainnet
    // address: "0x550CFd388Dbe33fb42C81E86bA957002D7769f6a", // sepolia
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "numberOfHundreds",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    functionName: "mint",
    args: [numTokens / 100], // Adjust argument to match contract's expected unit
    value: totalValueInWei, // Total value for transaction
    enabled: numTokens >= 100,
  });

  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write?.();
      }}>
      <label htmlFor='numTokens'>Number of Tokens (multiples of 100, minimum 100)</label>
      <div>
        <button type='button' onClick={() => setInputValue(String(Math.max(100, numTokens - 100)))}>
          -
        </button>
        <input id='numTokens' type='number' onChange={handleInputChange} value={inputValue} step='100' min='100' />
        <button type='button' onClick={() => setInputValue(String(numTokens + 100))}>
          +
        </button>
      </div>
      {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      <p>Total Price: {totalValue.toFixed(4)} ETH</p>
      <button disabled={!write || isLoading}>{isLoading ? "Minting..." : "Mint"}</button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && <div>Error: {(prepareError || error)?.message}</div>}
    </form>
  );
}
