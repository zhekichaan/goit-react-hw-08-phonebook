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

export const Label = styled.label`
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`

export const Input = styled.input`
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;

    &:focus {
        outline:none;
        border-color: #e84a5f;
    }
`

export const Group = styled.div`
    position:relative; 
    margin: 20px auto;
`

export const FormImage = styled.div`
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 65%;
    background-image: url('https://img3.goodfon.com/wallpaper/nbig/5/7e/old-phone-red-wall-peeling.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 5%;
    position: relative;

    & h2 {
        position: absolute;
	    left: 6%;
	    bottom: 8%;
	    right: 10%;
	    font-size: 1.75rem;
	    font-weight: 700;
	    color: white;
	    line-height: 1.222;
	& small {
		display: block;
		font-size: .75em;
		font-weight: 400;
		margin-top: .25em;
	}
    }
`