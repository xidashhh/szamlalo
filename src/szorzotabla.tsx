import './szorzotabla.css';

const values = SzorzoTabla(10);

function SzorzoTabla(n : number): number[][] {
    const matrix = [];

    for (let i = 0; i < n; i++){
        const row = [];
        for (let j = 0; j < n; j++){
            row.push(i*j);
        }
        matrix.push(row);
    }
    return matrix;

}

const MultipliactionTable = () => {
    return (

        <table>
            <tbody>
            {values.map((row, i) => (
                <tr key={i}>
                    {row.map((row, j) => (
                        <td key={j}>{row}</td>
                    ))}
                </tr>))}
            </tbody>
        </table>
    )
}
export default MultipliactionTable;