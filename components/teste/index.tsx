import styles from './teste.module.css'

let profile = {nome: '', email: '', telefone: '', id: '', cpf: ''}

var teste = '{"id": "1","nome":"Calebe","email":"@gmail.com","telefone":"62","cpf":"00"}'

// console.log(JSON.parse(teste))

profile = JSON.parse(teste)

export default function Teste() {
    return (
        <>
            <p>Testando componentes dinamicos</p>
            <div>
                <p><strong>Nome: </strong>{profile.nome}</p>
                <p><strong>Email: </strong>{profile.email}</p>
                <p><strong>Telefone: </strong>{profile.telefone}</p>
                <p><strong>UserID: </strong>{profile.id}</p>
                <p><strong>CPF: </strong>{profile.cpf}</p>
            </div>    
        </>
    )
}