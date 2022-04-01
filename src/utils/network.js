import { request } from "./request";
export function getHomeMultidata(){
  return request({
    URL:'/api/home',
    method:'get'
  })
}
export function getTvshowMultidata(){
  return request({
    url:'/api/Tvshow',
    header:{
      'Content-Type':'application/json'
    },
    method:'post',
    data:{
      userName:'chen',
      password:'123'
    }
  })
}
export function getMovieMultidata(){
  return request({
    url:'/api/Movie',
    header:{
      'Content-Type': 'multipart/form-data'
    },
    method:'post',
    data:{
      userName:'du',
      password:'123'
    }
  })
}