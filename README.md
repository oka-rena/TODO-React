# シンプルなTODOアプリケーション

これはReact学習のために作成したシンプルなTODOアプリケーションです。
TODOタスクの追加や削除、完了・未完了の状態の切り替えが可能です。


### 使用技術
* React
* node.js
* Docker

### 前提条件
アプリケーションをセットアップするには、
Docker desktop のインストールが必要です。


## アプリケーションのセットアップ方法

1. リポジトリをクローンする
```bash
git clone [リポジトリのURL]
cd [リポジトリのディレクトリ名]
```

2. dockerイメージをビルドする (初回、またはDockerfile等に変更があった場合)
```bash
docker compose build --no-cache
```
(目安: 約20秒)

3. dockerを起動させる
```bash
docker compose up -d
```


4. dockerの中に入る
```bash
docker compose exec app bash
```

5. 必要なパッケージをインストールする
```bash
yarn install
```
(目安: 約3～4分)

6. アプリを起動させる
```bash
yarn start
```
コマンドを打つと、「yarn run」と表示され、立ち上げが始まります。
1分ほど待つと、緑色の文字で「successfully」と表示されるので、
[http://localhost:3000](http://localhost:3000) にアクセスしてください。
