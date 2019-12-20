<template>
    <div class="hello container-fluid">
        <div class="header">
            <a class="newDA" @click="addNew">NEW</a>
        </div>
        <!-- <div class="row">
            <div class="col-5" v-for="(item,index) in datList" :key="index">
                <div style="padding-top: 10px;">
                    <a>X</a>
                </div>
                <div>{{item["description"]}}</div>
                <div class="text-nowrap">{{nowDate(item["publicationDate"])}}</div>
            </div>
            
        </div>-->
        <div class="row">
            <template v-for="(item,index) in datList">
                <div class="col-5 card" v-if="index<loadCount" :key="index" @click="changeDetail(item)">
                    <div class="card-body">
                        <h4 class="card-title" @click="deleteData(index)">X</h4>
                        <p class="card-text">{{item["description"]}}</p>
                        <p class="card-text">{{nowDate(item["publicationDate"])}}</p>
                    </div>
                </div>
            </template>
        </div>
        <div class="row mt-5" style="height:40px;">
            <div class="col">
                <button type="button" class="btn" @click="loadMore" style="background:orange;width:80%;color:white">load more</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    name: "HelloWorld",
    data() {
        return {
            datList: "123",
            loadCount: 6
        };
    },
    mounted() {
        let _this = this;
        axios
            .get("https://demo.api-platform.com/books?page=1")
            .then(function(response) {
                _this.datList = response.data["hydra:member"];
                console.log(response.data["hydra:member"]);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        nowDate: function(date) {
            return moment(date).format("YYYY - MM - DD");
        },
        loadMore: function() {
            this.loadCount = this.loadCount + 6;
        },
        deleteData: function(index) {
            let target = this.datList[index];

            const url = "https://demo.api-platform.com" + target["@id"];
            console.log(url);
            axios
                .delete(url)
                .then(function(response) {
                    this.datList.splice(index, 1);
                    console.log("刪除成功");
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        changeDetail: function(data) {
            console.log(data);
            let list = data;
            this.$router.push({
                name: "PageDetail",
                params: {
                    data: list
                }
            });
        },
        addNew: function() {
            this.$router.push({
                name: "AdeNew"
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
    height: 100%;
    .header {
        width: 100%;
        top: 0;
        left: 0;
        position: fixed;
        font-weight: bold;
        z-index: 50;
        height: 8vh;
        background: orange;
        color: white;
        .newDA {
            float: right;
            padding: 14px;
        }
    }
    .row {
        overflow: scroll;
        height: 70%;
    }
    .col-5 {
        // background: white;
        // margin: 17px;
        // height: 100px;
        // margin: 6px auto;
        // width: 88px;
        margin: 15px;
    }
    .card-text {
        color: #999;
        font-size: 15px;
    }
}
</style>
