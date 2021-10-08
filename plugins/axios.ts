import { Context } from "@nuxt/types"

export default function (context: Context) {

  const { $axios, error } = context

  $axios.setBaseURL('/api/v1')

  $axios.onRequest(config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
  })

  $axios.onError(err => {
    error({
      statusCode: err.response?.status
    })
  })

}