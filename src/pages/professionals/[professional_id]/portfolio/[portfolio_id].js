import Head from "next/head"
import {useRouter} from "next/router"

const PortfolioId = () => {
  const router = useRouter()
  const {portfolio_id: id} = router.query

  return (
    <main>
      <Head>
        <title>Portfolio {id}</title>
      </Head>
    </main>
  )
}
export default PortfolioId
