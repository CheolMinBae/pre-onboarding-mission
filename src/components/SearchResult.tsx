import { Dummy } from "../assets/data";

interface Props {
  resultValue: Dummy | null;
}

export default function SearchResult({ resultValue }: Props) {
  return (
    <table className="mt-48 w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Type</th>
          <th className="border px-4 py-2">Key</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {resultValue ? (
          <tr>
            <td className="border px-4 py-2">{resultValue?.type}</td>
            <td className="border px-4 py-2">{resultValue?.key}</td>
            <td className="border px-4 py-2">{resultValue?.description}</td>
          </tr>
        ) : (
          <tr>
            <td className="border px-4 py-2">No Data</td>
            <td className="border px-4 py-2">No Data</td>
            <td className="border px-4 py-2">No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
