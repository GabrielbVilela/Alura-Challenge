# Decodificador de texto
**_Alura Challenge: 27/09/2024_**
 
Primeiro desafio do curso de programação da Alura + Oracle: Praticando lógica de programação.

## Funcionalidades

- Criptografa e descriptografa mensagens.
- Copia o resultado para a área de transferência.
- Exibe um estado informativo quando não há mensagem.
- Valida a entrada conforme as regras abaixo.

## Regras da cifra

As vogais são substituídas pelas seguintes sequências:

| Vogal | Substituição |
|---|---|
| a | ai |
| e | enter |
| i | imes |
| o | ober |
| u | ufat |

**Exemplo:** `gatos` → `gaitobers` → `gatos`

**Limitações:** Rejeita utilizar letras maiúsculas ou acentuadas, mas são mantidos as pontuações e números. O objetivo foi estudar a validação de entradas impondo limites a um input

## Executar
Baixe os arquivos e abra o arquivo `index.html` em um navegador. Não é necessário dependências ou um build.

## Tecnologias
- **HTML:** Comentado e dividido entre main e footer. Padrão de nomenclatura BEM para as classes HTML e estilização.

- **CSS:** Resetado e estilizado com respon sividade, por meio do uso de porcentagem e rem.

- **JavaScript:** Cinco funções javascript com objetivos de validar apenas entradas de letras minúsculas sem acento, criptografar, descriptografar, apresentar o resultado ao usuário e permitir a copia do texto.


```text
.Projeto
├── index.html
├── main.js
├── css/
│   ├── reset.css
│   └── style.css
└── imgs/
    ├── Frame 6.png
    ├── Group.png
    └── High quality products 1 1.svg
```
