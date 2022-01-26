import { AxiosResponse } from 'axios';
import webClient from './webClient';

const getInfos = async (props: {
  setFriendsList: Function;
  setResult: Function;
  setStrongFeatures: Function;
  setWeakFeatures: Function;
  setRanking: Function;
  setRanks: Function;
}) => {
  try {
    const totalResult: AxiosResponse = await webClient.get(
      '/total-statistics/'
    );
    props.setResult(totalResult.data.result.result);
    props.setStrongFeatures(totalResult.data.result.features.strong);
    props.setWeakFeatures(totalResult.data.result.features.weak);
    props.setRanking(totalResult.data.mbti_ranking);
  } catch (error) {
    console.log(error);
  }
  try {
    const result: AxiosResponse = await webClient.get('/similar-friends/');
    props.setFriendsList(result.data);
  } catch (error) {
    console.log(error);
  }
  const ranksList: AxiosResponse = await webClient.get('/mbti-rank/');
  props.setRanks(ranksList.data);
};

export default getInfos;
