import inherited from 'mastodon/locales/ja.json';

const messages = {
  'getting_started.open_source_notice': 'Glitchsocは{Mastodon}によるフリーなオープンソースソフトウェアです。誰でもGitHub（{github}）から開発に參加したり、問題を報告したりできます。',
  'layout.auto': '自動',
  'layout.current_is': 'あなたの現在のレイアウト:',
  'layout.desktop': 'デスクトップ',
  'layout.single': 'モバイル',
  'navigation_bar.app_settings': 'アプリ設定',
  'getting_started.onboarding': '解説を表示',
  'onboarding.page_one.federation': '{domain}はMastodonのインスタンスです。Mastodonとは、独立したサーバが連携して作るソーシャルネットワークです。これらのサーバーをインスタンスと呼びます。',
  'onboarding.page_one.welcome': '{domain}へようこそ！',
  'onboarding.page_six.github': '{domain}はGlitchsocを使用しています。Glitchsocは{Mastodon}のフレンドリーな{fork}で、どんなMastodonアプリやインスタンスとも互換性があります。Glitchsocは完全に無料で、オープンソースです。{github}でバグ報告や機能要望あるいは貢獻をすることが可能です。',
  'settings.always_show_spoilers_field': '常に警告設定を表示する(指定がない場合は通常投稿)',
  'settings.auto_collapse': '自動折りたたみ',
  'settings.auto_collapse_all': 'すべて',
  'settings.auto_collapse_lengthy': '長いトゥート',
  'settings.auto_collapse_media': 'メディア付きトゥート',
  'settings.auto_collapse_notifications': '通知',
  'settings.auto_collapse_reblogs': 'ブースト',
  'settings.auto_collapse_replies': '返信',
  'settings.close': '閉じる',
  'settings.collapsed_statuses': 'トゥート折りたたみ',
  'settings.confirm_missing_media_description': '画像に対する補助記載がないときに投稿前の警告を表示する',
  'settings.content_warnings': '警告',
  'settings.content_warnings_filter': '説明に指定した文字が含まれているものを自動で展開しないようにする',
  'settings.content_warnings.regexp': '正規表現',
  'settings.enable_collapsed': 'トゥート折りたたみを有効にする',
  'settings.enable_content_warnings_auto_unfold': '警告指定されている投稿を常に表示する',
  'settings.general': '一般',
  'settings.image_backgrounds': '画像背景',
  'settings.image_backgrounds_media': '折りたまれたメディア付きトゥートをプレビュー',
  'settings.image_backgrounds_users': '折りたまれたトゥートの背景を変更する',
  'settings.media': 'メディア',
  'settings.media_letterbox': 'メディアをレターボックス式で表示',
  'settings.media_fullwidth': '全幅メディアプレビュー',
  'settings.navbar_under': 'ナビを画面下部に移動させる(モバイル レイアウトのみ)',
  'settings.notifications.favicon_badge': '通知アイコンに未読件数を表示する',
  'settings.notifications_opts': '通知の設定',
  'settings.notifications.tab_badge': '未読の通知があるとき、通知アイコンにマークを表示する',
  'settings.preferences': 'ユーザー設定',
  'settings.wide_view': 'ワイドビュー(デスクトップ レイアウトのみ)',
  'settings.compose_box_opts': '作成ボックスの設定',
  'settings.show_reply_counter': '投稿に対するリプライの数を表示する',
  'settings.side_arm': 'セカンダリートゥートボタン',
  'settings.side_arm.none': '表示しない',
  'settings.side_arm_reply_mode': '返信時の投稿範囲',
  'settings.side_arm_reply_mode.copy': '返信先の投稿範囲を利用する',
  'settings.side_arm_reply_mode.keep': 'セカンダリートゥートボタンの設定を維持する',
  'settings.side_arm_reply_mode.restrict': '返信先の投稿範囲に制限する',
  'settings.layout': 'レイアウト',
  'settings.layout_opts': 'レイアウトの設定',
  'status.collapse': '折りたたむ',
  'status.uncollapse': '折りたたみを解除',

  'confirmations.missing_media_description.message': '少なくとも1つの画像に視覚障害者のための画像説明が付与されていません。すべての画像に対して説明を付与することを望みます。',
  'confirmations.missing_media_description.confirm': 'このまま投稿',

  'favourite_modal.combo': '次からは {combo} を押せば、これをスキップできます。',

  'home.column_settings.show_direct': 'DMを表示',

  'notification.markForDeletion': '選択',
  'notifications.clear': '通知を全てクリアする',
  'notifications.marked_clear_confirmation': '削除した全ての通知を完全に削除してもよろしいですか？',
  'notifications.marked_clear': '選択した通知を削除する',

  'notification_purge.btn_all': 'すべて\n選択',
  'notification_purge.btn_none': '選択\n解除',
  'notification_purge.btn_invert': '選択を\n反転',
  'notification_purge.btn_apply': '選択したものを\n削除',

  'compose.attach.upload': 'ファイルをアップロード',
  'compose.attach.doodle': 'お絵描きをする',
  'compose.attach': '添付...',

  'advanced_options.local-only.short': 'ローカル限定',
  'advanced_options.local-only.long': '他のインスタンスには投稿されません',
  'advanced_options.local-only.tooltip': 'この投稿はローカル限定投稿です',
  'advanced_options.icon_title': '高度な設定',
  'advanced_options.threaded_mode.short': 'スレッドモード',
  'advanced_options.threaded_mode.long': '投稿時に自動的に返信するように設定します',
  'advanced_options.threaded_mode.tooltip': 'スレッドモードを有効にする',

  'navigation_bar.direct': 'ダイレクトメッセージ',
  'navigation_bar.bookmarks': 'ブックマーク',
  'column.bookmarks': 'ブックマーク',

  'compose.content-type.html': 'HTML',
  'compose.content-type.markdown': 'マークダウン',
  'compose.content-type.plain': 'プレーンテキスト',
  'compose_form.poll.multiple_choices': '複数回答を許可',
  'compose_form.poll.single_choice': '単一回答を許可',
  'compose_form.spoiler': '本文は警告の後ろに隠す',
  'confirmation_modal.do_not_ask_again': 'もう１度尋ねない',
  'confirmations.discard_edit_media.confirm': '破棄',
  'confirmations.discard_edit_media.message': 'メディアの説明・プレビューに保存していない変更があります。破棄してもよろしいですか？',
  'content-type.change': 'コンテンツ形式を変更',
  'settings.show_action_bar': 'アクションバーを表示',
  'settings.filtering_behavior': 'フィルターの振る舞い',
  'settings.filtering_behavior.cw': '警告文にフィルターされた単語を付加して表示します',
  'settings.filtering_behavior.drop': 'フィルターされたトゥートを完全に隠します',
  'settings.filtering_behavior.hide': '\'フィルターされました\'とその理由を確認するボタンを表示する',
  'settings.filtering_behavior.upstream': '\'フィルターされました\'とバニラMastodonと同じように表示する',
  'settings.filters': 'フィルター',
  'settings.hicolor_privacy_icons': 'ハイカラーの公開範囲アイコン',
  'settings.hicolor_privacy_icons.hint': '公開範囲アイコンを明るく表示し見分けやすい色にします',
  'confirmations.missing_media_description.message': 'このトゥートには説明のないメディアが含まれています',
  'settings.confirm_boost_missing_media_description': 'メディアの説明が欠けているトゥートをブーストする前に確認ダイアログを表示する',
  'settings.tag_misleading_links': '誤解を招くリンクにタグをつける',
  'settings.tag_misleading_links.hint': '明示的に言及していないすべてのリンクに、リンクターゲットホストを含む視覚的な表示を追加します',
  'settings.rewrite_mentions': '表示されたトゥートの返信先表示を書き換える',
  'settings.rewrite_mentions_acct': 'ユーザー名とドメイン名（アカウントがリモートの場合）を表示するように書き換える',
  'settings.rewrite_mentions_no': '書き換えない',
  'settings.rewrite_mentions_username': 'ユーザー名を表示するように書き換える',
  'settings.swipe_to_change_columns': 'スワイプでカラムを切り替え可能にする（モバイルのみ）',
  'settings.prepend_cw_re': '返信するとき警告に "re: "を付加する',
  'settings.preselect_on_reply': '返信するときユーザー名を事前選択する',
  'settings.confirm_before_clearing_draft': '作成しているメッセージが上書きされる前に確認ダイアログを表示する',
  'settings.show_content_type_choice': 'トゥートを書くときコンテンツ形式の選択ボタンを表示する',
  'settings.inline_preview_cards': '外部リンクに埋め込みプレビューを有効にする',
  'settings.media_reveal_behind_cw': '既定で警告指定されているトゥートの閲覧注意メディアを表示する',
  'settings.pop_in_left': '左',
  'settings.pop_in_player': 'ポップインプレイヤーを有効化する',
  'settings.pop_in_position': 'ポップインプレーヤーの位置:',
  'settings.pop_in_right': '右',

};

export default Object.assign({}, inherited, messages);
