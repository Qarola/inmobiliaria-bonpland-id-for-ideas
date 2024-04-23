import AdminForm from '../components/Forms/AdminForm';

const AdminDash= () => {

    const user = JSON.parse(sessionStorage.getItem('user'))

    return(
        <div className="flex w-[100%] justify-center items-center overflow-hidden p-10">
            {user && user.role === 'admin'
            ?
            <AdminForm/>
            :
            <div className="flex p-10 h-[80vh] justify-center items-center">
                <h1 className="text-4xl bold">ERROR 404</h1>
            </div>
            }
        </div>
    )
}

export default AdminDash