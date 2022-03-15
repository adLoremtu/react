import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextInput } from '../';

const FormDialog = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
        
    // 名前入力
    const inputName = useCallback((event) => {
        setName(event.target.value);
    }, [setName]);
    
    // メールアドレス入力
    const inputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail]);
    
    // お問い合わせ内容入力
    const inputDescription = useCallback((event) => {
        setDescription(event.target.value);
    }, [setDescription]);
    
    // メールアドレス形式チェック
    const validateEmailFormat = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(email)
    }

    // 入力チェック
    const validateRequiredInput = (...args) => {
        let isBlank = false;
        for (let i = 0; i < args.length; i=(i+1)|0) {
            if (args[i] === "") {
                isBlank = true;
            }
        }
        return isBlank
    };
    
    // ログ送信
    const submitForm = () => {
        const url = 'https://hooks.slack.com/services/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';
        
        const isBlank = validateRequiredInput(name, email, description)
        const isValidEmail = validateEmailFormat(email)
        
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
                
                setName('');
                setEmail('');
                setDescription('');
                
                return props.handleClose();
            })
        }
    }
    
    return (
        <Dialog 
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
            <DialogContent>
                <TextInput
                    label={"お名前（必須）"}
                    multiline={false}
                    rows={1}
                    value={name}
                    type={"text"}
                    onChange={inputName}
                />
                <TextInput
                    label={"メールアドレス（必須）"}
                    multiline={false}
                    rows={1}
                    value={email}
                    type={"email"}
                    onChange={inputEmail}
                />
                <TextInput
                    label={"お問い合わせ内容"}
                    multiline={true}
                    rows={5}
                    value={description}
                    type={"text"}
                    onChange={inputDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>キャンセル</Button>
                <Button onClick={submitForm} autoFocus>
                    送信する
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FormDialog