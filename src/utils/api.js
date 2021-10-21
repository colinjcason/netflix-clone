import axios from 'axios'
import {useState} from 'react'

const URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const getMovies = () => {
  axios.get(`${URL}${endpoints.originals}`, {
    params: {
      api_key: API_KEY
    }
  })
  .then(res => res.data.results)
}