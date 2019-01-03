import {
  $http,
  $upload
} from './request'

export function getVideos (data) {
  return $http({
    url: '',
    methods: '',
    data
  })
}

export function uploadVideos (path, data) {
  return $upload(path, data)
}
