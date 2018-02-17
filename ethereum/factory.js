
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(

	JSON.parse(CampaignFactory.interface),
	'0x8dD2E4CD4073D2556CbD743a6697b4475da796Fc'
);

export default instance;