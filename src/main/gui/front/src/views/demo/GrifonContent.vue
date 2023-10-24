<template>
    <div class="grifon-content">
        <Tabs value="name1">
            <TabPane label="人形建造" name="name1">
                <TimePicker @on-change="queryDoll(0)" v-model="build_time" :steps="[1, 10]" format="HH:mm"
                            :disabled-hours="disabled_hours"
                            hide-disabled-options placeholder="选择时间"
                            :transfer="true"></TimePicker>
                <!--<div class="ivu-table">
                    <Table :row-class-name="rowClassName" :columns="columns1" :data="dolls"></Table>
                    &lt;!&ndash;<p>Custom column styles:</p>
                    <Table :columns="columns9" :data="data1"></Table>
                    <p>Custom arbitrary cell styles:</p>
                    <Table :columns="columns1" :data="data8"></Table>&ndash;&gt;
                </div>-->
            </TabPane>
            <TabPane label="装备建造" name="name2" disabled>
                <TimePicker @on-change="queryDoll(1)" v-model="build_time" :steps="[1, 10]" format="HH:mm"
                            :disabled-hours="disabled_hours"
                            hide-disabled-options placeholder="选择时间" size="large"
                            placement="right"
                            style="width: 200px"></TimePicker>
            </TabPane>
            <TabPane label="培养价值" name="name3">
                <Cascader @on-change="queryDoll(2)" :data="data_v" v-model="doll_value" :transfer="true"></Cascader>
            </TabPane>
            <TabPane label="关键字搜索" name="name4">
                <AutoComplete
                        v-model="search_value"
                        style="width: 300px;margin-right: 10px"
                        placement="bottom"
                        :data="isAuto?search_keywords:[]"
                        :filter-method="filterMethod"
                        placeholder="输入至少2个关键字以联想"
                        :transfer="true">
                </AutoComplete>
                <Button type="primary" icon="ios-search" @click="queryDoll(3)">GO</Button>
                <p style="font-size: 12px;margin: 5px 0 5px 0;float: right;"><i class="fa fa-bell-o"></i>&nbsp;允许模糊查询,
                    仅支持按名称查询
                </p>
            </TabPane>
        </Tabs>
        <div class="ivu-table">
            <Table :row-class-name="rowClassName" :columns="columns1" :data="dolls"></Table>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapMutations
    } from 'vuex';

    export default {
        name: "GrifonContent",
        data() {
            return {
                isAuto: false,
                search_value: '',
                disabled_hours: [],
                build_time: undefined,
                doll_value: [],
                data_v: [{
                    value: 'HG',
                    label: '手枪HG',
                    children: [
                        {
                            value: 'S',
                            label: 'S'
                        },
                        {
                            value: 'A+',
                            label: 'A+'
                        },
                        {
                            value: 'A',
                            label: 'A'
                        },
                        {
                            value: 'B',
                            label: 'B'
                        }
                    ]
                }, {
                    value: 'SMG',
                    label: '冲锋枪SMG',
                    children: [
                        {
                            value: 'S',
                            label: 'S'
                        },
                        {
                            value: 'A+',
                            label: 'A+'
                        },
                        {
                            value: 'A',
                            label: 'A'
                        },
                        {
                            value: 'B',
                            label: 'B'
                        }
                    ],
                },
                    {
                        value: 'AR',
                        label: '突击步枪AR',
                        children: [
                            {
                                value: 'S',
                                label: 'S'
                            },
                            {
                                value: 'A+',
                                label: 'A+'
                            },
                            {
                                value: 'A',
                                label: 'A'
                            },
                            {
                                value: 'B',
                                label: 'B'
                            }
                        ],
                    },
                    {
                        value: 'RF',
                        label: '步枪RF',
                        children: [
                            {
                                value: 'S',
                                label: 'S'
                            },
                            {
                                value: 'A+',
                                label: 'A+'
                            },
                            {
                                value: 'A',
                                label: 'A'
                            },
                            {
                                value: 'B',
                                label: 'B'
                            }
                        ],
                    },
                    {
                        value: 'MG',
                        label: '机枪MG',
                        children: [
                            {
                                value: 'S',
                                label: 'S'
                            },
                            {
                                value: 'A+',
                                label: 'A+'
                            },
                            {
                                value: 'A',
                                label: 'A'
                            },
                            {
                                value: 'B',
                                label: 'B'
                            }
                        ],
                    },
                    {
                        value: 'SG',
                        label: '霰弹SG',
                        children: [
                            {
                                value: 'S',
                                label: 'S'
                            },
                            {
                                value: 'A+',
                                label: 'A+'
                            },
                            {
                                value: 'A',
                                label: 'A'
                            },
                            {
                                value: 'B',
                                label: 'B'
                            }
                        ],
                    }
                ],
                columns1: [
                    {
                        title: 'No.',
                        key: 'doll_id'
                    },
                    {
                        title: 'Name',
                        key: 'doll_name'
                    },
                    {
                        title: 'Type',
                        key: 'doll_type'
                    },
                    {
                        title: '稀有度',
                        key: 'star'
                    },
                    {
                        title: '价值',
                        key: 'value',
                    },
                    {
                        title: '建造时间',
                        key: 'build_time',
                    }
                ],
            }
        },
        computed: {
            ...mapState({
                dolls: state => state.home.dolls,
                search_keywords: state => state.home.search_keywords,
            }),
        },
        mounted() {
            this.filterAbleHours();
            this.getSearchInfo();
        },
        beforeDestroy() {
            this.clearSearchInfo();
        },
        watch: {
            search_value: {
                handler(val) {
                    this.isAuto = val.length > 1;
                }

            }
        },
        methods: {
            ...mapMutations({
                clearSearchInfo: 'home/CLEAR_SEARCH_INFO',
            }),
            ...mapActions({
                getDollsInfo: 'home/GET_DOLLS_INFO',
                getSearchInfo: 'home/GET_SEARCH_INFO',
            }),
            filterMethod(value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            queryDoll(val) {
                this.$nextTick(() => {
                    let params = {};
                    if (val === 0 && this.build_time !== '') {
                        params = {
                            build_time: this.build_time + ":00",
                        };
                    } else if (val === 2 && this.doll_value[0] !== undefined) {
                        params = {
                            doll_type: this.doll_value[0],
                            value: this.doll_value[1],
                        };
                    } else if (val === 3) {
                        params = {
                            doll_name: this.search_value,
                        };
                    }else {
                        return;
                    }
                    /*params = {
                        build_time: this.build_time + ":00",
                        doll_type: this.doll_value[0],
                        value: this.doll_value[1],
                    };*/
                    this.getDollsInfo(params);
                });
            },
            filterAbleHours() {
                let hours = [];
                for (let i = 9; i < 24; i++) {
                    hours.push(i);
                }
                this.disabled_hours = hours;
            },
            rowClassName(row, index) {
                if (row.star === "5") {
                    return 'demo-table-five-row';
                } else if (row.star === "4") {
                    return 'demo-table-four-row';
                } else if (row.star === "3") {
                    return 'demo-table-three-row';
                } else if (row.star === "2") {
                    return 'demo-table-two-row';
                }
                return '';
            }
        }
    }
</script>

<style>
    .ivu-table .demo-table-five-row td {
        background-color: #ffff99;
        color: #454545;
    }

    .ivu-table .demo-table-four-row td {
        background-color: #32b500;
        color: #fff;
    }

    .ivu-table .demo-table-three-row td {
        background-color: #0087cc;
        color: #fff;
    }

    .ivu-table .demo-table-two-row td {
        background-color: #dddddd;
        color: #454545;
    }

    .ivu-table td.demo-table-info-column {
        background-color: #2db7f5;
        color: #fff;
    }

    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }

    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }

    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
