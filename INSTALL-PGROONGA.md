PGroongaの実装方法  
環境：Fedora 34, PostgreSQL13, pgroonga-2.3.0  

PGroongaをインストール  
ソースを展開  

```
wget https://packages.groonga.org/source/pgroonga/pgroonga-2.3.0.tar.gz
tar xvf pgroonga-2.3.0.tar.gz
mv pgroonga-2.3.0 /usr/local/
```
ビルドしてインストール  

```
sudo su -
dnf install groonga-devel postgresql13-devel postgresql13-contrib msgpack-devel ccache
cd /usr/local/pgroonga-2.3.0
export PATH=/usr/pgsql-13/bin:$PATH
make HAVE_MSGPACK=1
make install
exit
```

PostgreSQLでPGroongaの拡張機能を有効化  

```
sudo su - postgres
psql -d mastodon_production
CREATE EXTENSION pgroonga;
\q
```

PGroongaのインデックスを作成  

```
sudo su - mastodon
cd live
RAILS_ENV=production bundle exec rails db:migrate
exit
sudo systemctl restart mastdon-{web,streaming,sidekiq}
```
