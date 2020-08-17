import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
	Button,
} from 'reactstrap';

import Antenne from './uikit/Form/Antenne';

const OrganismeAddresses = React.forwardRef(({
	className,
	formData,
	keyAntennes,
	onAntenneChange,
	onClickAddAntenne,
	onClickDeleteAntenne,
}, ref) => {
	const [hasValidationError, setValidationErrror] = useState(false);

	const handleClickAdd = useCallback(() => {
		if (!ref?.current?.state?.valid) {
			setValidationErrror(true);
			return false;
		}
		setValidationErrror(false);
		return onClickAddAntenne();
	}, [ref, onClickAddAntenne]);

	return (
		<div
			className={className}
		>
			<Antenne
				data={formData.address}
				id={0}
				main
				prefix="address"
				title="Adresse publique principale *"
			/>
			<Button
				color="dark"
				onClick={handleClickAdd}
				block
			>
				Ajouter une antenne ou un distributeur
			</Button>
			{formData.antennes?.map((antenne, index) => (
				<Antenne
					onAddressChange={(e) => onAntenneChange(e, index)}
					className={index > 0 ? 'py-4 w-100' : 'w-100'}
					data={antenne}
					key={`Antenne_${keyAntennes(index)}`}
					prefix={`antennes.${index}`}
					title={`Adresse supplémentaire n°${index + 1}`}
				/>
			))}
			<Button
				className="btn-link"
				onClick={onClickDeleteAntenne}
			>
				Supprimer
			</Button>
		</div>

	);
});

OrganismeAddresses.propTypes = {
	className: PropTypes.string,
	formData: PropTypes.shape({
		address: PropTypes.shape({}),
		antennes: PropTypes.arrayOf(PropTypes.shape({})),
	}).isRequired,
	keyAntennes: PropTypes.func.isRequired,
	onAntenneChange: PropTypes.func.isRequired,
	onClickAddAntenne: PropTypes.func.isRequired,
	onClickDeleteAntenne: PropTypes.func.isRequired,
};

OrganismeAddresses.defaultProps = {
	className: '',
};

export default React.memo(OrganismeAddresses);
