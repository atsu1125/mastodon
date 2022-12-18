## お知らせ ##
### Dockerイメージはここにあるのだわ
https://hub.docker.com/r/atsu1125/mastodon  
https://github.com/atsu1125/mastodon/pkgs/container/mastodon  
コミット時にdevelopタグ、リリース時にlatestタグで自動作成されるのだわ  

### 全文検索について
以下のMastodon Glitch Editionからいろいろ書き換えてるのでそのままでは動かないのだわ  
ElasticSearchは使わないようになってるので有効化しなくてよいのだわ  
その代わりにPGroongaを使用しているのだわ  
そのためPostgreSQLは13以上のバージョンでPGroongaのエクステンションを使えるようにして欲しいのだわ  
そうするとデータベースのマイグレーションが通るようになるはずなのだわ  
PGroongaのインストール方法：  
https://github.com/atsu1125/mastodon/blob/main/INSTALL-PGROONGA.md  

### オブジェクトストレージを使う場合  
なんか公式にマニュアルないんだけど結構手間かかるからマニュアル作成したから読めなのだわ  
https://github.com/atsu1125/atsuchanpage/blob/main/mastodonobjectstorage.md  

### データベースのバックアップの設定方法
データベースさえ生き残ればなんとかなるからバックアップを必ず設定するのだわ  
https://github.com/atsu1125/atsuchanpage/blob/main/wal-g-backup.md

<h2 id="sec-7">独自機能</h2>
<p>このインスタンスでは以下の独自機能が使えるのだわ</p>
<ul>
  <li><a href="https://glitch-soc.github.io/docs">Mastodon Glitch Edition</a>の機能全て
</li>
  <li>cat feature（<a href=https://odakyu.app/about>小田急don</a>から）(Misskey Capable)
</li>
  <li>PGroongaによる検索機能（Public, Unlisted, Private, Directの全てのトゥートが検索できるよ、こちらも<a href=https://odakyu.app/about>小田急don</a>から改変）
</li>
  <li>ハッシュタグタイムラインで全ての公開範囲のトゥートを検索できる（<a href=https://kirishima.cloud/about>アスタルテ</a>から改変）
</li>
  <li>モデレータの権限が強いです！カスタム絵文字関連なんでもいじれちゃう！すごい！</li>
  <li>一つのカラムで2000件のトゥートまで遡れる（デフォルトは400件）（<a href=https://fedibird.com/about>Fedibird</a>から） </li>
  <li>削除されていた新規登録時の自動フォロー機能を有効に（<a href=https://hello.2heng.xin/about>小森林</a>から）</li>
  <li>ドメインタイムライン（連合タイムラインから特定のインスタンスの投稿だけを抜き出して表示する機能・現在Mastodon Flavorのみ対応）（<a href=https://fedibird.com/about>Fedibird</a>から）</li>
  <li>リストタイムラインの追加にフォローが必須ではない。フォローしてなくても追加できる機能(Misskey Capable)</li>
  <li>ホワイトリストモード（連合制限モード）でもインスタンス情報を開示するように</li>
  <li>Keybase統合を継続サポート</li>
  <li>ブロック・ドメインブロックの誤操作を防止する設定（<a href=https://fedibird.com/about>Fedibird</a>から）</li>
  <li>Botからのフォローは承認制に(Misskey Capable)</li>
  <li>リモートからのフォローを承認制にする設定(Meisskey Capable)</li>
  <li>フォローを許可しない設定(Meisskey Capable)</li>
  <li>フォローしているならフォローリクエストを自動で承認する設定(Misskey Capable)</li>
  <li>メインテナー情報・インスタンスのテーマカラーをNodeinfoから配信するように(Misskey Capable)</li>
  <li>フォロワー解除をプロフィールタイムラインから行えるように</li>
  <li>すでに存在する投稿のURIは新しいタブではなくタイムラインで開くように（<a href=https://fedibird.com/about>Fedibird</a>から）</li>
  <li>Misskeyの誕生日・場所とGroundpolisの性別を表示するように(Misskey Capable)</li>
  <li>ローカルタイムライン・公開タイムラインを無効化できるように(Misskey Capable)</li>
  <li>フォロー数・フォロワー数をユーザーの設定もしくはインスタンス全体として隠せるように</li>
</ul>

#  Mastodon Glitch Edition  #

>   Now with automated deploys!

[![Build Status](https://img.shields.io/circleci/project/github/glitch-soc/mastodon.svg)][circleci]
[![Code Climate](https://img.shields.io/codeclimate/maintainability/glitch-soc/mastodon.svg)][code_climate]

[circleci]: https://circleci.com/gh/glitch-soc/mastodon
[code_climate]: https://codeclimate.com/github/glitch-soc/mastodon

So here's the deal: we all work on this code, and anyone who uses that does so absolutely at their own risk. can you dig it?

- You can view documentation for this project at [glitch-soc.github.io/docs/](https://glitch-soc.github.io/docs/).
- And contributing guidelines are available [here](CONTRIBUTING.md) and [here](https://glitch-soc.github.io/docs/contributing/).
