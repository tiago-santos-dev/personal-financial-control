import theme from "@styles/theme";
import { BiTrashAlt } from "react-icons/bi";
import { Container } from "./styles";

export const TransactionTable: React.FC = () =>
// useEffect(() => {
//   api.get('/transactions')
//     .then(data => console.log(data));
// }, [])
(
  <Container>
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Salário</td>
          <td className="income">R$ 4.000</td>
          <td>Receita Fixa</td>
          <td>22/04/2022 às 13:24</td>
          <td> <BiTrashAlt color={theme.colors.danger.light} /> </td>
        </tr>
        <tr>
          <td>Curso de NextJS</td>
          <td className="outcome">R$ 2.000</td>
          <td>Educação</td>
          <td>22/04/2022 às 13:24</td>
          <td> <BiTrashAlt color={theme.colors.danger.light} /> </td>
        </tr>
      </tbody>
    </table>
  </Container>
)

