import { Context } from "@nuxt/types"

export default function (context: Context) {
  const login = context.store.state.auth.login
  if (login) context.app.router?.push('/sono-4')
}