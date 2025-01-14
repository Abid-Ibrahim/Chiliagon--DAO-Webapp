import classes from './Footer.module.css';
import { Container } from 'react-bootstrap';
// import { buildEtherscanAddressLink } from '../../utils/etherscan';
import { externalURL, ExternalURL } from '../../utils/externalURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
// import config from '../../config';
// import Link from '../Link';
import Links from '../Links';

const Footer = () => {
  const twitterURL = externalURL(ExternalURL.twitter);
  const discordURL = externalURL(ExternalURL.discord);
  // const etherscanURL = buildEtherscanAddressLink(config.addresses.nounsToken);
  // const discourseURL = externalURL(ExternalURL.discourse);

  return (
    <div className={classes.wrapper}>
      <Container  className={classes.container}>
        <footer  className={classes.footerSignature}>
          <Links buttonIcon={<FontAwesomeIcon icon={faDiscord} size="2x"/>} url={discordURL} leavesPage={true} />
          <Links buttonIcon={<FontAwesomeIcon icon={faTwitter} size="2x"/>} url={twitterURL} leavesPage={true} /> 
        </footer>
      </Container>
    </div>
  );
};
export default Footer;

//  <Link text="Etherscan" url={etherscanURL} leavesPage={true} />  */}
// <Link text="Forums" url={discourseURL} leavesPage={false} /> 