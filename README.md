# actions-on-google-cloud-functions-template 
This is a starter template for the backend of Actions-on-Google to develop cloud functions for Firebase.

# Setup
## Pre steps
* update libs to latest
```bash 
$ npm install firebase-tools -g
```

## Step1: Register own GCP Project
* 利用したいGCPプロジェクトのGoogleアカウントにログインする。
```bash 
$ firebase logout 
$ firebase login
```

* GCPプロジェクトを選ぶ
```bash 
# 選択
$ firebase use --add

# .fireasercの設定を確認 
$ firebase target
```

## Step2: Deploy Firebase Cloud Functions
```bash 
firebase deploy --only functions
```

