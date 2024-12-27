import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    package_json: {
                        table: 'sys_module'
                        id: 'c77246f77b824f268b092f9177583702'
                    }
                }
            }
        }
    }
}
