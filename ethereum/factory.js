
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(

	JSON.parse(CampaignFactory.interface),
	'0xb79a4FE418186770CA4EAD787A2dEC3FD6B7C6DA'
);

export default instance;