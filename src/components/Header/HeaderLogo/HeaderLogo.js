import "./style.css";
import Logo_W_Tree 	from '../../../assets/ArborCraft_extended.png';
import Logo_WO_Tree	from '../../../assets/logos/arborcraft.png';
import arbor_text 	from '../../../assets/logos/arbor_text.png';
import craft_text 	from '../../../assets/logos/craft_text.png';

const HeaderLogo = () => {
	const logoContainer = document.createElement('div');
				logoContainer.classList.add('header-logo-container');


  const headerLogo = new Image();
			  // headerLogo.src = Logo_W_Tree;
			  headerLogo.src = Logo_WO_Tree;
			  headerLogo.classList.add('temp-header-logo');


	// const arbor = new Image();
	// 			arbor.classList.add('arbor-text', 'logo-text');
	// 			arbor.src = arbor_text;
	// const craft = new Image();
	// 			craft.classList.add('craft-text', 'logo-text');
	// 			craft.src = craft_text;

	// logoContainer.appendChild(arbor);
	// logoContainer.appendChild(craft);


  logoContainer.appendChild(headerLogo)
	return logoContainer;
};

export default HeaderLogo();