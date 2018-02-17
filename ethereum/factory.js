
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(

	JSON.parse(CampaignFactory.interface),
	'0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1'
);

export default instance;