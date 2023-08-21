import "./style.css";
import Logo_W_Tree 	from '../../../assets/ArborCraft_extended.png';
import Logo_WO_Tree	from '../../../assets/logos/arborcraft.png';
import arbor_text 	from '../../../assets/logos/arbor_text.png';
import craft_text 	from '../../../assets/logos/craft_text.png';

const HeaderLogo = screenWidth => {
	let logo;
	const logoContainer = document.createElement('div');
		logoContainer.classList.add('header-logo-container');


  const headerLogo = new Image();
	  headerLogo.classList.add('header-logo');

  	if (screenWidth <= 400) {
  		logo = Logo_WO_Tree
  	} else if (screenWidth > 400) {
  		logo = Logo_W_Tree;
  	};
	  headerLogo.src = logo;


  logoContainer.appendChild(headerLogo)
	return logoContainer;
};

export default HeaderLogo;