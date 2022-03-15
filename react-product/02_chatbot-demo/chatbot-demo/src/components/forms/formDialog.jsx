import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextInput } from '../';

export default class FormDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }
        
        this.inputName = this.inputName.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.inputDescription = this.inputDescription.bind(this);
    }
    
    // 名前入力
    inputName = (event) => {
        this.setState({ name: event.target.value })
    }
    
    // メールアドレス入力
    inputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    
    // お問い合わせ内容入力
    inputDescription = (event) => {
        this.setState({ description: event.target.value })
    }
    
    // メールアドレス形式チェック
    validateEmailFormat = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(email)
    }

    // 入力チェック
    validateRequiredInput = (...args) => {
        let isBlank = false;
        for (let i = 0; i < args.length; i=(i+1)|0) {
            if (args[i] === "") {
                isBlank = true;
            }
        }
        return isBlank
    };
    
    // ログ送信
    submitForm = () => {
        const name = this.state.name;
        const email = this.state.email;
        const description = this.state.description;
        
        const url = 'https://hooks.slack.com/services/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';
        
        const isBlank = this.validateRequiredInput(name, email, description)
        const isValidEmail = this.validateEmailFormat(email)
        
        if(isBlank) {
            alert('必須入力欄が空白です。')
            return false
        } else if(!isValidEmail) {
            alert('メールアドレスの書式が異なります。')
            return false
        } else {
            const payload = {
                text: `
お問い合わせが送信されました
名前：${name}
メールアドレス：${email}
内容：${description}`
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload)
            }).then(() => {
                alert('送信完了！');
                this.setState({
                    name: '',
                    email: '',
                    description: ''
                })
                
                return this.props.handleClose();
            })
        }
    }
    
    render() {
        return (
            <Dialog 
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
                <DialogContent>
                    <TextInput
                        label={"お名前（必須）"}
                        multiline={false}
                        rows={1}
                        value={this.state.name}
                        type={"text"}
                        onChange={this.inputName}
                    />
                    <TextInput
                        label={"メールアドレス（必須）"}
                        multiline={false}
                        rows={1}
                        value={this.state.email}
                        type={"email"}
                        onChange={this.inputEmail}
                    />
                    <TextInput
                        label={"お問い合わせ内容"}
                        multiline={true}
                        rows={5}
                        value={this.state.description}
                        type={"text"}
                        onChange={this.inputDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>キャンセル</Button>
                    <Button onClick={this.submitForm} autoFocus>
                        送信する
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}