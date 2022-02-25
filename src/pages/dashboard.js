import { Breadcrumb } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="dashboard">
        dashboard
      </div>
    </>
  )
}

export default Dashboard
