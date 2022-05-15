import Head from "next/head"
import {useRouter} from "next/router"

const ReviewId = () => {
  const router = useRouter()
  const {review_id: id} = router.query

  return (
    <main>
      <Head>
        <title>Review {id}</title>
      </Head>
    </main>
  )
}
export default ReviewId
