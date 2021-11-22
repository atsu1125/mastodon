## お知らせ ##
Dockerイメージはここにある（リリース時に自動ビルド）  
https://hub.docker.com/repository/docker/atsu1125/mastodon  

 以下のMastodon Glitch Editionからいろいろ書き換えてるのでそのままでは動かないのだわ  
 ElasticSearchは使わないようになってるので有効化しなくてよいのだわ  
 その代わりにPGroongaを使用しているのだわ  
 そのためPostgreSQLは13以上のバージョンでPGroongaのエクステンションを使えるようにして欲しいのだわ  
 そうするとデータベースのマイグレーションが通るようになるはずなのだわ  
 PGroongaの実装方法： https://github.com/atsu1125/mastodon/blob/main/INSTALL-PGROONGA.md  

<h2 id="sec-7">独自機能</h2>
<p>このインスタンスでは以下の独自機能が使えます。</p>
<ul>
  <li><a href="https://glitch-soc.github.io/docs">Mastodon Glitch Edition</a>の機能全て
</li>
  <li>cat feature（<a href=https://odakyu.app/about>小田急don</a>から）
</li>
  <li>PGroongaによる検索機能（Public, Unlisted, Private, Directの全てのトゥートが検索できるよ、こちらも<a href=https://odakyu.app/about>小田急don</a>から改変）
</li>
  <li>ハッシュタグタイムラインで全ての公開範囲のトゥートを検索できる（<a href=https://kirishima.cloud/about>アスタルテ</a>から改変）
</li>
  <li>モデレータの権限が強いです！カスタム絵文字関連なんでもいじれちゃう！すごい！</li>
  <li>一つのカラムで2000件のトゥートまで遡れる（デフォルトは400件）（<a href=https://fedibird.com/about>Fedibird</a>から） </li>
  <li>新規登録時の自動フォロー機能を有効に（<a href=https://hello.2heng.xin/about>小森林</a>から）</li>
  <li>ドメインタイムライン（連合タイムラインから特定のインスタンスの投稿だけを抜き出して表示する機能・現在Mastodon Flavorのみ対応）（<a href=https://fedibird.com/about>Fedibird</a>から）</li>
</ul>

#  Mastodon Glitch Edition  #

>   Now with automated deploys!

[![Build Status](https://img.shields.io/circleci/project/github/glitch-soc/mastodon.svg)][circleci]
[![Code Climate](https://img.shields.io/codeclimate/maintainability/glitch-soc/mastodon.svg)][code_climate]

[circleci]: https://circleci.com/gh/glitch-soc/mastodon
[code_climate]: https://codeclimate.com/github/glitch-soc/mastodon

So here's the deal: we all work on this code, and then it runs on dev.glitch.social and anyone who uses that does so absolutely at their own risk. can you dig it?

- You can view documentation for this project at [glitch-soc.github.io/docs/](https://glitch-soc.github.io/docs/).
- And contributing guidelines are available [here](CONTRIBUTING.md) and [here](https://glitch-soc.github.io/docs/contributing/).
