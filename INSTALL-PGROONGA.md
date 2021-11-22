PGroongaの実装方法  
環境：Fedora 34, PostgreSQL14.1, pgroonga-2.3.4  

GroongaとPGroongaをインストール  
ソースを展開  

```
wget https://packages.groonga.org/source/groonga/groonga-11.0.9.tar.gz
tar xvzf groonga-11.0.9.tar.gz
mv groonga-11.0.9 /usr/local/
wget https://packages.groonga.org/source/pgroonga/pgroonga-2.3.4.tar.gz
tar xvf pgroonga-2.3.4.tar.gz
mv pgroonga-2.3.4 /usr/local/
```
ビルドしてインストール  

```
sudo su -
dnf install postgresql14-devel postgresql14-contrib msgpack-devel ccache
cd /usr/local/groonga-11.0.9
./configure
make -j$(grep '^processor' /proc/cpuinfo | wc -l)
sudo make install
cd /usr/local/pgroonga-2.3.4
export PATH=/usr/pgsql-14/bin:$PATH
export PKG_CONFIG_PATH=/usr/local/lib/pkg-config
make HAVE_MSGPACK=1
make install
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
