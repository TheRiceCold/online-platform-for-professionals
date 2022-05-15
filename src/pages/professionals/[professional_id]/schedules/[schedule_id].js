import Head from "next/head"
import {useRouter} from "next/router"

const ScheduleId = () => {
  const router = useRouter()
  const {schedule_id: id} = router.query

  return (
    <main>
      <Head>
        <title>Schedule {id}</title>
      </Head>
    </main>
  )
}
export default ScheduleId
