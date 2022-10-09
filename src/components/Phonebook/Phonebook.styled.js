import styled from "styled-components";

export const PhonebookForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 365px;
	background-color: #FFF;
	border-radius: 10px;
	box-shadow: 0 10px 20px 0 #9a9a9a;
	padding: .75rem;

    & input:focus ~ label, input:valid ~ label {
        top: -20px;
        font-size: 14px;
        color: #e84a5f;
    }

    & button {
        margin: 10px auto;
        padding: 10px;
        width: 200px;
    }
`