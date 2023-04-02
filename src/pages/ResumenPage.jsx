import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { cartContext } from '../context/cartContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { saveOrder } from '../services/firebase';

import {
	ResumenMainContainer,
	TitleResumenStyles
} from './styles/ResumenPageStyles';
import { useNavigate } from 'react-router-dom';

const ResumenPage = () => {
	const {
		cart,
		clearCart,
		getPriceInCart
	} = useContext(cartContext);
	const navigate = useNavigate();

	const processCart = async () => {
		await saveOrder(cart);
		clearCart();
		navigate('/');
	};

  return (
		<ResumenMainContainer>
			<TitleResumenStyles>
				Resumen de la compra
			</TitleResumenStyles>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Provider</TableCell>
							<TableCell align="right">Price</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cart.map((item) => (
							<TableRow
								key={item.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{item.name}
								</TableCell>
								<TableCell>{item.provider}</TableCell>
								<TableCell align="right">{item.price}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{ cart.length && (
				<Stack direction="row" spacing={2}>
					<Button variant="outlined" color="error" onClick={() => clearCart()}>
						Limpiar carrito
					</Button>
					<Button variant="contained" color="success" onClick={() => processCart()}>
						Procesar pedido ${getPriceInCart()}
					</Button>
				</Stack>
			)}
		</ResumenMainContainer>
	);
}

export default ResumenPage;