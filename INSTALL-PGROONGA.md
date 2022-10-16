PGroongaの実装方法  
環境：Fedora 35, PostgreSQL14.5, pgroonga-2.3.8  

GroongaとPGroongaをインストール  
ソースを展開  

```
wget https://packages.groonga.org/source/groonga/groonga-12.0.7.tar.gz
tar xvzf groonga-12.0.7.tar.gz
wget https://packages.groonga.org/source/pgroonga/pgroonga-2.3.8.tar.gz
tar xvf pgroonga-2.3.8.tar.gz
```
ビルドしてインストール  

```
dnf install postgresql14-devel postgresql14-contrib msgpack-devel ccache
cd groonga-12.0.7
./configure
make -j$(grep '^processor' /proc/cpuinfo | wc -l)
sudo make install
cd pgroonga-2.3.8
export PATH=/usr/pgsql-14/bin:$PATH
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
make HAVE_MSGPACK=1
sudo make install PG_CONFIG=/usr/pgsql-14/bin/pg_config PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
echo "/usr/local/lib">> /etc/ld.so.conf.d/groongalib.conf
sudo ldconfig
exit
sudo systemctl restart postgresql-14
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

PGroongaのインデックスがおかしくなったときは以下で再作成可能

```
suod su - postgres
psql -c mastodon_production
REINDEX DATABASE mastodon_production;
\q
```
