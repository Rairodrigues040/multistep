import React from 'react'

const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome: </label>
                <input type="text"
                    name="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    required
                    // Preservam os valores do nome adicionados, caso o usuário volte a página
                    value={data.name || ""}
                    onChange={(e) => updateFieldHandler("name", e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail: </label>
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o seu e-mail"
                    required
                    // Preservam os valores do email adicionados, caso o usuário volte a página
                    value={data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}
                // adiciona-se no value a prop + o name

                />
            </div>
        </div>
    )
}

export default UserForm
