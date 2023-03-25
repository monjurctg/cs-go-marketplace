import axios from "axios";
import data from "../public/steam_inv.json";

const MarketService = {};

MarketService.marketListening = async (data) => {
  console.log("data", data);
  let filter = "?";

  if (
    data?.price?.length > 0
    // data?.price.toString() !== ["0", "0"].toString()
  ) {
    filter += `&price=${data?.price}`;
    // console.log("filter", filter);
  }
  if (data?.exterior) {
    filter += `&exterior=${data?.exterior}`;
  }
  if (data?.rarity) {
    filter += `&rarity=${data?.rarity}`;
  }
  if (data?.trade_lock) {
    filter += `&trade_lock=${data?.trade_lock}`;
  }
  if (data?.weapon?.length > 0) {
    filter += `&weapon=${data?.weapon}`;
  }
  if (data?.search_value?.length > 0) {
    filter += `&search_value=${data?.search_value}`;
  }
  if (data?.sort_by?.length > 0) {
    filter += `&sort_by=${data?.sort_by}`;
  }
  if (data?.float?.length > 0) {
    filter += `&float=${data?.float}`;
  }
  if (data?.per_page) {
    filter += `&per_page=${data?.per_page}`;
  }
  if (data?.page) {
    filter += `&page=${data?.page}`;
  }

  // console.log("filter", filter);
  let url = `/public/market${filter}`;
  let res = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);

  // console.log('data', filter)
  return res;
};

MarketService.getBestDeals = async () => {
  let url = "/public/best/deals";
  let res = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log('res', res)
  return res;
};

MarketService.singleMarket = async (itemId) => {
  // let url ='/steam/market-listings'
  let url = `/public/market/single/${itemId}`;
  //  '/steam/get-user-inventory'

  return await axios.get(url);
};

MarketService.dojoInventory = (data) => {
  console.log("data", data);
  let filter = "?";
  if (data?.price?.length > 0) {
    filter += `&price=${data?.price}`;
    console.log("filter", filter);
  }
  if (data?.exterior) {
    filter += `&exterior=${data?.exterior}`;
  }
  if (data?.rarity) {
    filter += `&rarity=${data?.rarity}`;
  }
  if (data?.trade_lock) {
    filter += `&trade_lock=${data?.trade_lock}`;
  }
  if (data?.weapon?.length > 0) {
    filter += `&weapon=${data?.weapon}`;
  }
  if (data?.search_value?.length > 0) {
    filter += `&search_value=${data?.search_value}`;
  }
  if (data?.sort_by?.length > 0) {
    filter += `&sort_by=${data?.sort_by}`;
  }
  if (data?.float?.length > 0) {
    filter += `&float=${data?.float}`;
  }
  if (data?.per_page) {
    filter += `&per_page=${data?.per_page}`;
  }
  if (data?.page) {
    filter += `&page=${data?.page}`;
  }

  let url = `/dojo/inventory${filter}`;
  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};
MarketService.dojoWithdraw = async () => {
  let url = "/dojo/inventory/withdraw";
  let res = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};
// MarketService.recomendedPrice = () => {
//   let url = "/steam/inventory/recommended/prices";
//   let res = axios.get(url);
//   // console.log("res", res);
//   return res;
// };

MarketService.steamInventory = async (data) => {
  let filter = "?";
  if (data?.price?.length > 0) {
    filter += `&price=${data?.price}`;
    console.log("filter", filter);
  }
  if (data?.exterior) {
    filter += `&exterior=${data?.exterior}`;
  }
  if (data?.rarity) {
    filter += `&rarity=${data?.rarity}`;
  }
  if (data?.trade_lock) {
    filter += `&trade_lock=${data?.trade_lock}`;
  }
  if (data?.weapon?.length > 0) {
    filter += `&weapon=${data?.weapon}`;
  }
  if (data?.search_value?.length > 0) {
    filter += `&search_value=${data?.search_value}`;
  }
  if (data?.sort_by?.length > 0) {
    filter += `&sort_by=${data?.sort_by}`;
  }
  if (data?.float?.length > 0) {
    filter += `&float=${data?.float}`;
  }
  if (data?.per_page) {
    filter += `&per_page=${data?.per_page}`;
  }
  if (data?.page) {
    filter += `&page=${data?.page}`;
  }

  let url = `/steam/inventory${filter}`;
  let res = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};

MarketService.itemOnSale = async (data) => {
  let filter = "?";

  if (
    data?.price?.length > 0 &&
    data?.price.toString() !== ["0", "0"].toString()
  ) {
    filter += `&price=${data?.price}`;
    console.log("filter", filter);
  }
  if (data?.exterior) {
    filter += `&exterior=${data?.exterior}`;
  }
  if (data?.rarity) {
    filter += `&rarity=${data?.rarity}`;
  }
  if (data?.trade_lock) {
    filter += `&trade_lock=${data?.trade_lock}`;
  }
  if (data?.weapon?.length > 0) {
    filter += `&weapon=${data?.weapon}`;
  }
  if (data?.search_value?.length > 0) {
    filter += `&search_value=${data?.search_value}`;
  }
  if (data?.sort_by?.length > 0) {
    filter += `&sort_by=${data?.sort_by}`;
  }
  if (data?.float?.length > 0) {
    filter += `&float=${data?.float}`;
  }
  if (data?.per_page) {
    filter += `&per_page=${data?.per_page}`;
  }
  if (data?.page) {
    filter += `&page=${data?.page}`;
  }
  let url = `/dojo/inventory/items/on/sale${filter}`;
  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};

MarketService.updatePrice = (data) => {
  let filter = "?";
  if (data?.asset_id) {
    filter += `assetId=${data?.asset_id}`;
  }
  if (data?.price) {
    filter += `&price=${data?.price}`;
  }
  console.log("filter", filter);
  let url = `/dojo/inventory/update/item/price${filter}`;

  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err.response);
  // console.log("res", res);
  return res;
};

MarketService.creadeTrade = async (assetId) => {
  let url = `/dojo/inventory/withdraw?assetId=${assetId}`;
  let res = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err.response);
  // console.log("res", res);
  return res;
};

MarketService.updateTradeUrl = (tradeUrl) => {
  const url = "/steam/update-trade-url";
  const res = axios.post(url, {trade_url: tradeUrl});
  return res;
};

MarketService.delist = (assetId) => {
  let url = `/dojo/inventory/delist/item/${assetId}`;
  // console.log('url', url)
  // let url = "/dojo/inventory/market";

  //  '/steam/get-user-inventory'

  let res = axios.get(url);
  // console.log("res", res);
  return res;
};
MarketService.recomendedPrice = (assetId) => {
  let url = `/steam/inventory/recommended/price?assetId=${assetId}`;

  let res = axios.get(url);
  // console.log("res", res);
  return res;
};

MarketService.getDiscount = () => {
  let url = `/steam/inventory/get/fee`;

  let res = axios.get(url);
  // console.log("res", res);
  return res;
};

MarketService.putOnSale = (data) => {
  let filter = "?";
  if (data?.asset_id) {
    filter += `assetId=${data?.asset_id}`;
  }
  if (data?.price) {
    filter += `&price=${data?.price}`;
  }
  if (data?.recommendedPrice) {
    filter += `&recommendedPrice=${data?.recommendedPrice}`;
  }
  console.log("filter", filter);
  let url = `/steam/inventory/put/on/sale${filter}`;

  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err.response);
  // console.log("res", res);
  return res;
};
MarketService.relistOnSale = (data) => {
  let filter = "?";
  if (data?.asset_id) {
    filter += `assetId=${data?.asset_id}`;
  }
  if (data?.price) {
    filter += `&price=${data?.price}`;
  }
  if (data?.recommendedPrice) {
    filter += `&recommendedPrice=${data?.recommendedPrice}`;
  }
  console.log("filter", filter);
  let url = `/dojo/inventory/relist/item${filter}`;

  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err.response);
  // console.log("res", res);
  return res;
};

MarketService.buySkin = async (assetId) => {
  let url = `/dojo/inventory/buy/item/${assetId}`;
  let res = await axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};

MarketService.featuredSeller = async () => {
  let url = `/featured/seller`;
  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};

MarketService.shopItems = async (id) => {
  let url = `/shop/${id}`;
  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};

MarketService.featuredSellerShop = async (id) => {
  let url = `/featured/seller/view/shop/${id}`;
  let res = axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
  // console.log("res", res);
  return res;
};
export default MarketService;
