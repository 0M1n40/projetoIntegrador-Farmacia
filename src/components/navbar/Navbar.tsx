import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-black text-white'>
            
                <div className="container flex justify-between text-lg">
                   <Link to='/'>Projeto Fármacia</Link> 

                    <div className='flex gap-4'>
                
                    <Link to='/categorias' className='hover:underline'>Listar Categorias  </Link> |
                      <Link to ='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar